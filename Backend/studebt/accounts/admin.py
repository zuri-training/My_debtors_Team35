from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import School, Student, CustomUser
from .forms import CustomUserCreationForm, CustomUserChangeForm

# Register your models here.
class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email', 'is_staff', 'is_student', 'is_school']
    list_filter = ['is_staff', 'is_student', 'is_school']
    fieldsets = (
        (None, {'fields': ('email', 'password',)}),
        ('Bio', {'fields': ('first_name', 'last_name',)}),
        ('Permissions', {'fields': ('is_staff', 'is_student', 'is_school', 'is_active', 'is_superuser')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_student', 'is_school')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()

admin.site.register(CustomUser, CustomUserAdmin)

admin.site.register(School)
admin.site.register(Student)