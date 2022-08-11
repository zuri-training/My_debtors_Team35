from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import DebtorsPosting, Dispute, Comment, GlobalStudent

from accounts.models import School, Student
from accounts.serializers import SchoolProfileSerializer, StudentProfileSerializer

from django.db import transaction


class GlobalStudentProfileSerializer(ModelSerializer):
    class Meta:
        model = GlobalStudent
        fields = ('student_government_id', 'first_name', 'last_name')


class DebtorsPostingSerializer(ModelSerializer):

    class Meta:
        model = DebtorsPosting
        fields = ( 'government_id', 'student_government_id', 'first_name', 'last_name', 'school_name', 'debt_amount', 'debt_status', 'debt_type', 'debt_payment_date', )

    def create(self, validated_data):
        return DebtorsPosting.objects.create(**validated_data)
