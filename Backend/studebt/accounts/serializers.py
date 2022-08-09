from accounts.models import School, Student
from django.contrib.auth import get_user_model
from django.db import transaction
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

User = get_user_model()


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'is_school',)


class StudentProfileSerializer(ModelSerializer):
        class Meta:
            model = Student
            fields = [
                "student_government_id",
                "current_class",
                "date_of_birth",
                "state",
                "lga",
                "contact",
                "address",
                "date_created",
            ]


class StudentSignUpSerializer(ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    profile = StudentProfileSerializer(required=True)
    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name', 'is_student', 'profile', 'password', 'password2')
        extra_kwargs = {
            'password': {'write_only': True} # This is to prevent the password from being displayed in the API
        }

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        with transaction.atomic(): # This is to ensure that the user and profile are created in a single transaction
            user = User.objects.create_user(**validated_data)
            Student.objects.create(user=user, **profile_data)
        return user

    def save(self, **kwargs):  
        user = User(
            email=self.validated_data['email'],
            first_name=self.validated_data['first_name'],
            last_name=self.validated_data['last_name'],
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords must match'})

        user.set_password(self.validated_data['password'])
        user.is_student = True
        user.save()
        Student.objects.create(user=user, **kwargs)
        return user

    
class SchoolProfileSerializer(ModelSerializer):
        class Meta:
            model = School
            fields = [
                'school_name',
                'name_of_propietor',
                'lga',
                'state',
                'contact',
                'address',
                'government_id',
                'date_created',
            ]


class SchoolSignUpSerializer(ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    profile = SchoolProfileSerializer()
    class Meta:
        model = User
        fields = ('email', 'is_school', 'profile', 'password', 'password2')
        extra_kwargs = {
            'password': {'write_only': True} # This is to prevent the password from being displayed in the API
        }

    def save(self, **kwargs):
        user = User(
            email=self.validated_data['email'],
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        # Check passwords match
        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords must match'})

        user.set_password(password)
        user.is_school = True
        user.save()
        School.objects.create(user=user)
        return user

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        with transaction.atomic():
            user = User.objects.create(**validated_data)
            School.objects.create(user=user, **profile_data)
        return user
    