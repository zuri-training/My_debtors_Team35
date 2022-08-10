from multiprocessing import AuthenticationError

from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.authentication import (SessionAuthentication,
                                           TokenAuthentication)
from rest_framework.authtoken.models import Token
<<<<<<< HEAD
=======
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework import status, permissions, generics
from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
>>>>>>> 17dbaf706554c17cf16037400de64b721874d09d
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

<<<<<<< HEAD
from .serializers import (SchoolSignUpSerializer, StudentSignUpSerializer,
                          UserSerializer)

=======
from .permissions import IsOwnerOrReadOnly, IsStudentUser, IsSchoolUser
from .serializers import SchoolSignUpSerializer, UserSerializer, StudentSignUpSerializer, StudentProfileSerializer, SchoolProfileSerializer

from django.conf import settings
from .models import Student, School
>>>>>>> 17dbaf706554c17cf16037400de64b721874d09d
# Create your views here.
User = get_user_model()

class StudentRegisterView(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny,] 
    serializer_class = StudentSignUpSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid():
            user = serializer.save()
            token = Token.objects.get(user=user)
            return Response({
                "user": UserSerializer(user, context=self.get_serializer_context()).data, 
                "token": token.key,
                "message": "Student registered successfully"},
                 status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class SchoolRegisterView(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny,] 
    serializer_class = SchoolSignUpSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()
            token = Token.objects.get(user=user)
            return Response({
                "user": UserSerializer(user, context=self.get_serializer_context()).data, 
                "token": token.key,
                "message": "School registered successfully"}, 
                status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)

        return Response({
            "user": UserSerializer(token.user, context=self.get_serializer_context()).data, 
            "token": token.key,
            "user_id": user.pk,
            "is_student": user.is_student}, 
            status=status.HTTP_200_OK)


class LogOutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        request.auth.delete()
        return Response(status=status.HTTP_200_OK)


# Dashboard for the student.
class StudentOnlyView(APIView):
    permission_classes = [permissions.IsAuthenticated&IsStudentUser]
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        user = request.user
        serializer = self.serializer_class(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, *args, **kwargs):
        user = request.user
        serializer = self.serializer_class(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Dashboard for the school.
class SchoolOnlyView(APIView):
    permission_classes = [permissions.IsAuthenticated&IsSchoolUser]
    serializer_class = UserSerializer
    serializer_class_school = SchoolProfileSerializer

    def get(self, request, *args, **kwargs):
        user = request.user
        serializer = self.serializer_class(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, *args, **kwargs):
        user = request.user
        serializer = self.serializer_class(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserListView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated&permissions.IsAdminUser]
    serializer_class = UserSerializer
    queryset = User.objects.all()



# class RegisterView(APIView):
    # def post(self, request):
    #     data = request.data

    #     try:
    #         email = data['email'].lower()
    #         password = data['password']
    #         password2 = data['password2']
    #         profile = data['profile']
    #         is_student = data['is_student']
    #         is_school = data['is_school']
    #     except:
    #         return Response({"message": "Missing fields"}, status=status.HTTP_400_BAD_REQUEST)

    #     # Check user type 
    #     if is_school == 'True' and is_student == 'True':
    #         return Response({"error": "You can't be both a school and a student"}, status=status.HTTP_400_BAD_REQUEST)
    #     elif is_school == 'True' and is_student == 'False':
    #         is_school = True
    #         is_student = False
    #     elif is_school == 'False' and is_student == 'True':
    #         is_school = False
    #         is_student = True
    #     else:
    #         return Response({"error": "You must be either a school or a student"}, status=status.HTTP_400_BAD_REQUEST)

    #     # Check if passwords match
    #     if password == password2:
    #         if len(password) >= 8:
    #             # Check that email does not exist in database 
    #             if not User.objects.filter(email=email).exists():
    #                 if not is_school:
    #                     # Create student account
    #                     serializer_class = StudentSignUpSerializer
    #                     serializer = serializer_class(data=data)
    #                     if serializer.is_valid():
    #                         serializer.save()
    #                         return Response({'data': serializer.data, 'message': 'Student account created successfully'}, status=status.HTTP_201_CREATED)
     
    #                 else:
    #                     # Then it is a school account
    #                     serializer_class = SchoolSignUpSerializer
    #                     serializer = serializer_class(data=data)
    #                     if serializer.is_valid():
    #                         serializer.save()
    #                         return Response(serializer.data, status=status.HTTP_201_CREATED)
                        

    #             return Response({"error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)

    #     else:
    #         return Response({"error": "Passwords do not match"}, status=status.HTTP_400_BAD_REQUEST)

        

