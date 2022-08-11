from django.urls import path

from .views import ( SchoolRegisterView, StudentRegisterView, 
CustomObtainAuthToken, LogOutView, StudentOnlyView, SchoolOnlyView, UserListView )



urlpatterns = [
    path('register-school/', SchoolRegisterView.as_view(), name='register-school'),
    path('register-student/', StudentRegisterView.as_view(), name='register-student'),
    path('login/', CustomObtainAuthToken.as_view(), name='login'),
    path('logout/', LogOutView.as_view(), name='logout'),
    path('school/dashboard/', SchoolOnlyView.as_view(), name='schooldashboard'),
    path('student/dashboard/', StudentOnlyView.as_view(), name='studentdashboard'),


    path('view/users', UserListView.as_view(), name='view-users'),
]