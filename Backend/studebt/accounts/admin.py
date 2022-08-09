from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import CustomUser, School, Student


# Register your models here.
class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email', 'date_joined', 'last_login', 'is_staff', 'is_student', 'is_school']
    list_filter = ['is_staff', 'is_student', 'is_school']
    fieldsets = (
        (None, {'fields': ('email', 'password', 'last_login')}),
        ('Bio', {'fields': ('first_name', 'last_name',)}),
        ('Permissions', {
            'fields': (
                'is_staff', 'is_student', 'is_school', 'is_active', 'is_superuser', 'groups', 'user_permissions', 'date_joined'
            )}
        ),
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