from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import DebtorsPosting, Dispute, Comment, GlobalStudent

from accounts.serializers import StudentProfileSerializer, SchoolProfileSerializer, UserSerializer
from accounts.models import School, Student
from accounts.serializers import SchoolProfileSerializer, StudentProfileSerializer

from django.contrib.auth import get_user_model



User = get_user_model()

class DebtorsPostingSerializer(ModelSerializer):

    class Meta:
        model = DebtorsPosting
        fields = "__all__"

    def create(self, validated_data):
        return DebtorsPosting.objects.create(**validated_data)




# Comments and Disputes
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
