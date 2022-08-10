from accounts.serializers import UserSerializer
from my_debtors.models import Comment, Dispute
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer


class CommentSerializer(ModelSerializer):

    class Meta:
        model = Comment
        fields = "__all__"
    
    
class CommentCreateSerializer(ModelSerializer):
    comment_author = serializers.SerializerMethodField()
    # dispute = serializers.PrimaryKeyRelatedField(queryset=Dispute.objects.all())
    
    def get_comment_author(self, obj):
        return UserSerializer(self.context["request"].user)
    
    class Meta:
        model = Comment
        fields = "__all__"
    
    
class DisputeSerializer(ModelSerializer):

    class Meta:
        model = Dispute
        fields = "__all__"
        

class DisputeCreateSerializer(ModelSerializer):
    dispute_author = serializers.SerializerMethodField()

    class Meta:
        model = Dispute
        fields = "__all__"
                
    def get_dispute_author(self, obj):
        return UserSerializer(self.context["request"].user)
    