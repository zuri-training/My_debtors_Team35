from my_debtors.models import Comment, Dispute
from my_debtors.serializers import (CommentCreateSerializer, CommentSerializer,
                                    DisputeCreateSerializer, DisputeSerializer)
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated

# Create your views here.


class CommentListApi(ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CommentCreateApi(CreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Comment.objects.all()
    serializer_class = CommentCreateSerializer


class DisputeListApi(ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Dispute.objects.all()
    serializer_class = DisputeSerializer


class DisputeCreateApi(CreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Dispute.objects.all()
    serializer_class = DisputeCreateSerializer
