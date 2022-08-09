from django.db import models
from django.contrib.auth.models import AbstractUser

from django.utils.translation import gettext_lazy as _
from django.conf import settings 
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from .managers import CustomUserManager


# Create your models here.
class CustomUser(AbstractUser):
    username=None
    email = models.EmailField(max_length=255, unique=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    is_student = models.BooleanField(default=False)
    is_school = models.BooleanField(default=False)
    # profile_image = models.ImageField(upload_to='', blank=True, null=True, default='')
    

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
    school_name = models.CharField(max_length=120, blank=True, null=True)
    name_of_propietor = models.CharField(max_length=120, blank=True, null=True)
    lga = models.CharField(max_length=120, blank=True, null=True)
    state = models.CharField(max_length=120, blank=True, null=True)
    contact = models.CharField(max_length=120, blank=True, null=True) 
    address = models.CharField(max_length=120, blank=True, null=True) 
    government_id = models.CharField(max_length=120, unique=True, blank=True, null=True) 
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.user.email

class Student(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    student_government_id = models.CharField(max_length=120, blank=True, null=True, unique=True) 
    current_class = models.CharField(max_length=120, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    state = models.CharField(max_length=120, blank=True, null=True)
    lga = models.CharField(max_length=120, blank=True, null=True)
    contact = models.CharField(max_length=120, blank=True, null=True) 
    address = models.CharField(max_length=120, blank=True, null=True) 
    date_created = models.DateField(auto_now_add=True)

    def get_full_name(self):
        return '{} {}'.format(self.user.first_name, self.user.last_name)

    def get_short_name(self):
        return self.user.first_name

    def __str__(self):
        return self.get_full_name()

    

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)