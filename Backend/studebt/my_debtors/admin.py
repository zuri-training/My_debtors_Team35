from django.contrib import admin
from .models import Student, School

# Register your models here.

admin.site.register(School)
admin.site.register(Student)