from django.db import models
from django.contrib.auth.models import AbstractUser

from .managers import CustomUserManager

# Create your models here.
class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(unique=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    is_student = models.BooleanField(default=False)
    is_school = models.BooleanField(default=False)
    

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        ordering = ['email']
        verbose_name = 'user'

    def __str__(self):
        return self.email

class School(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    name = models.CharField(max_length=120)
    lga = models.CharField(max_length=120)
    state = models.CharField(max_length=120)
    contact = models.CharField(max_length=120) 
    address = models.CharField(max_length=120) 
    government_id = models.CharField(max_length=120) 
    date_created = models.DateField(auto_now_add=True)


class Student(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    name = models.CharField(max_length=120)
    student_government_id = models.CharField(max_length=120) 
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    date_of_birth = models.DateField()
    state = models.CharField(max_length=120)
    lga = models.CharField(max_length=120)
    contact = models.CharField(max_length=120) 
    address = models.CharField(max_length=120) 
    date_created = models.DateField(auto_now_add=True)
