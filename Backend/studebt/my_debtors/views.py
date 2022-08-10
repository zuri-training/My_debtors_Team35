from my_debtors.models import Comment, Dispute
from my_debtors.serializers import CommentSerializer, DisputeSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import CreateModelMixin
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Comment, Dispute
from .serializers import CommentSerializer, DisputeSerializer

# Create your views here.


class CommentListAPI(GenericAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get(self, *args, **kwargs):
        data = Comment.objects.filter(dispute_id=kwargs.get("dispute_id")).values()
        return Response(data)#, status=status.HTTP_201_CREATED)
    
    
class CommentCreateAPI(CreateModelMixin, GenericAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = CommentSerializer
    # queryset = Comment.objects.all()
    
    def post(self, request, *args, **kwargs):
        return self.create(request, args, kwargs)



class DisputeListAPI(GenericAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Dispute.objects.all()
    serializer_class = DisputeSerializer

    def get(self, *args, **kwargs):
        data = Dispute.objects.all().values()
        return Response(data)
    

class DisputeCreateAPI(CreateModelMixin, GenericAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = DisputeSerializer
    
    def post(self, request, *args, **kwargs):
        return self.create(request, args, kwargs)
