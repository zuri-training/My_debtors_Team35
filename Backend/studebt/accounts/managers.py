from django.contrib.auth.models import BaseUserManager


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """
        Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email), 
            **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_school(self, email, password=None, **extra_fields):
        """
        Creates and saves school user with the given email and password.
        """
        user = self.create_user(email, password)
        user.is_school = True
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Creates and saves a superuser with the given email and password.
        """
        user = self.create_user(email, password)
        user.is_admin = True
        user.is_superuser = True
        user.is_staff = True
        
        user.save(using=self._db)
        return user