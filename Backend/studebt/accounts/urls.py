from django.urls import path

from .views import RegisterView, RetrieveUserView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('my-profile/', RetrieveUserView.as_view(), name='retrieve'),
]