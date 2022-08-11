from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import status 



from .serializers import DebtorsPostingSerializer
from accounts.permissions import IsOwnerOrReadOnly, IsStudentUser, IsSchoolUser
from .models import DebtorsPosting, Dispute, Comment, GlobalStudent


class DebtorsPostingCreateView(APIView):
    serializer_class = DebtorsPostingSerializer
    # permission_classes = [IsAuthenticated, IsSchoolUser]

    def post(self, request, *args, **kwargs):

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "data": serializer.data},
                status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    

class DebtorsPostingDetailView(APIView):
    serializer_class = DebtorsPostingSerializer
    
    def get_object(self, pk):
        try:
            return DebtorsPosting.objects.get(pk=pk)
        except DebtorsPosting.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def get(self, request, pk, *args, **kwargs):
        debtors_posting = self.get_object(pk)
        serializer = self.serializer_class(debtors_posting)
        return Response(serializer.data)
    
    def put(self, request, pk, *args, **kwargs):
        debtors_posting = self.get_object(pk)
        serializer = self.serializer_class(debtors_posting, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, *args, **kwargs):
        debtors_posting = self.get_object(pk)
        debtors_posting.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)