from multiprocessing import AuthenticationError
from django.shortcuts import render
from django.contrib.auth import get_user_model

from rest_framework.authtoken.models import Token
from rest_framework import status, permissions, generics
from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated


from .serializers import SchoolSignUpSerializer, UserSerializer, StudentSignUpSerializer

# Create your views here.
User = get_user_model()

class RegisterView(APIView):
    permission_classes = [permissions.AllowAny, ]

    def post(self, request):
        
            data = request.data

            try:
                email = data['email'].lower()
                password = data['password']
                password2 = data['password2']
                profile = data['profile']
                is_student = data['is_student']
                is_school = data['is_school']
            except:
                return Response({"message": "Missing fields"}, status=status.HTTP_400_BAD_REQUEST)

            # Check user type 
            if is_school == 'True' and is_student == 'True':
                return Response({"error": "You can't be both a school and a student"}, status=status.HTTP_400_BAD_REQUEST)
            elif is_school == 'True' and is_student == 'False':
                is_school = True
                is_student = False
            elif is_school == 'False' and is_student == 'True':
                is_school = False
                is_student = True
            else:
                return Response({"error": "You must be either a school or a student"}, status=status.HTTP_400_BAD_REQUEST)

            # Check if passwords match
            if password == password2:
                if len(password) >= 8:
                    # Check that email does not exist in database 
                    if not User.objects.filter(email=email).exists():
                        if not is_school:
                            # Create student account
                            serializer_class = StudentSignUpSerializer
                            serializer = serializer_class(data=data)
                            if serializer.is_valid():
                                serializer.save()
                                return Response(
                                    serializer.data, status=status.HTTP_201_CREATED)
                                    
                        else:
                            # Then it is a school account
                            serializer_class = SchoolSignUpSerializer
                            serializer = serializer_class(data=data)
                            if serializer.is_valid():
                                serializer.save()
                                return Response(serializer.data, {"message": "You have successfully registered."}, status=status.HTTP_201_CREATED)
                    return Response({"error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)

            else:
                return Response({"error": "Passwords do not match"}, status=status.HTTP_400_BAD_REQUEST)

        
class RetrieveUserView(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    authentication_classes = [TokenAuthentication,]

    def get(self, request, *args, **kwargs):
        # try:
            user = request.user
            user = UserSerializer(user).data  # Serialize user data
            
            return Response(
                {'message': 'User retrieved successfully', 'user': user},
                status=status.HTTP_200_OK
            )
        # except:
        #     return Response(
        #         {"error": "Error retrieving user"},
        #         status=status.HTTP_500_INTERNAL_SERVER_ERROR
        #     )


class LoginView(APIView):
    def post(self, request):
        email = request.data['email'].lower()
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user:
            if user.check_password(password):
                return Response(
                    {'message': 'User logged in successfully'},
                )
            else:
                raise AuthenticationError('Invalid password')

        else:
            return Response(
                {'error': 'User does not exist'},
                status=status.HTTP_400_BAD_REQUEST
            )


#######################################################################
