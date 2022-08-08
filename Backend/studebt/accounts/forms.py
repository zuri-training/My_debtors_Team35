from django import forms

from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth import get_user_model

User = get_user_model()

class CustomUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm.Meta):
        """
        Meta class to override the default UserCreationForm
        Users will register with all field provided in CustomUserClass
        Including email, password1 and password2
        """
        model = User
        fields = ('email',)

class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields = ('email',)