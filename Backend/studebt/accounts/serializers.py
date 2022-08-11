from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from rest_framework.validators import UniqueValidator
from accounts.models import Student, School

from django.contrib.auth import get_user_model
from django.db import transaction

User = get_user_model()


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'is_school', )


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


class StudentSerializer(ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    profile = StudentProfileSerializer(required=True)
    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name', 'profile', 'password', 'password2')
        extra_kwargs = {
            'email': {
                'required': True,
            },
            'first_name': {
                'required': True,
            },
            'last_name': {
                'required': True,
            },
            'password': { 'write_only': True, 'style': {'input_type': 'password'} },

        }

    def validate(self, attrs): 
        email = attrs.get('email', None)
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("Email already exists")
        if attrs.get('password') != attrs.get('password2'):
            raise serializers.ValidationError({'password': 'Passwords must match'})
        return attrs

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        password2 = validated_data.pop('password2')
        with transaction.atomic(): # This is to ensure that the user and profile are created in a single transaction
            user = User.objects.create_user(**validated_data)
            user.is_student = True
            user.set_password(validated_data['password'])
            user.save()
            Student.objects.create(user=user, **profile_data)
        return user     

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        with transaction.atomic():
            instance.email = validated_data.get('email', instance.email)
            instance.first_name = validated_data.get('first_name', instance.first_name)
            instance.last_name = validated_data.get('last_name', instance.last_name)
            instance.save()
            instance.profile.student_government_id = profile_data.get('student_government_id', instance.profile.student_government_id)
            instance.profile.current_class = profile_data.get('current_class', instance.profile.current_class)
            instance.profile.date_of_birth = profile_data.get('date_of_birth', instance.profile.date_of_birth)
            instance.profile.state = profile_data.get('state', instance.profile.state)
            instance.profile.lga = profile_data.get('lga', instance.profile.lga)
            instance.profile.contact = profile_data.get('contact', instance.profile.contact)
            instance.profile.address = profile_data.get('address', instance.profile.address)
            instance.profile.save()
    
        return instance


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


class SchoolSerializer(ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    profile = SchoolProfileSerializer()
    class Meta:
        model = User
        fields = ('email', 'profile', 'password', 'password2')
        extra_kwargs = {
            'password': {'write_only': True, 
                        'style':{'input_type':'password'}
            } # This is to prevent the password from being displayed in the API
        }

    def validate(self, attrs):
        email = attrs.get('email', None)
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("Email already exists")
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({'password': 'Passwords must match'})
        return attrs

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        password2 = validated_data.pop('password2')
        with transaction.atomic():
            user = User.objects.create(**validated_data)
            user.is_school = True
            user.set_password(validated_data['password'])
            user.save()
            School.objects.create(user=user, **profile_data)
        return user

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        with transaction.atomic():
            instance.email = validated_data.get('email', instance.email)
            instance.save()
            instance.profile.school_name = profile_data.get('school_name', instance.profile.school_name)
            instance.profile.name_of_propietor = profile_data.get('name_of_propietor', instance.profile.name_of_propietor)
            instance.profile.lga = profile_data.get('lga', instance.profile.lga)
            instance.profile.state = profile_data.get('state', instance.profile.state)
            instance.profile.contact = profile_data.get('contact', instance.profile.contact)
            instance.profile.address = profile_data.get('address', instance.profile.address)
            instance.profile.government_id = profile_data.get('government_id', instance.profile.government_id)
            instance.profile.save()

        return instance

    # def save(self, **kwargs):
    #     user = User(
    #         email=self.validated_data['email'],
    #     )
    #     password = self.validated_data['password']
    #     password2 = self.validated_data['password2']
    #     # Check passwords match
    #     if password != password2:
    #         raise serializers.ValidationError({'password': 'Passwords must match'})

    #     user.set_password(password)
    #     user.is_school = True
    #     user.save()
    #     School.objects.create(user=user)
    #     return user

    

# class LoginSerializer(ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('email', 'password', )
#         extra_kwargs = {
#             'password': {'write_only': True} # This is to prevent the password from being displayed in the API
#         }

#     def validate(self, data):
#         user = User.objects.filter(email=data['email']).first()
#         if user is None:
#             raise serializers.ValidationError({'email': 'Invalid email'})
#         if not user.check_password(data['password']):
#             raise serializers.ValidationError({'password': 'Invalid password'})
#         return data

#     def create(self, validated_data):
#         return User.objects.get(email=validated_data['email'])