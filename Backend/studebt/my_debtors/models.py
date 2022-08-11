from django.db import models
from accounts.models import School, Student

from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

    
    
class DebtorsPosting(models.Model):
    DEBT_STATUS_CHOICES = (
        ('PENDING', 'Pending'),
        ('CLEARED', 'Cleared'),
        ('CANCELED', 'Canceled'),
    )


    student_government_id = models.CharField(max_length=120, default=None)
    government_id = models.CharField(max_length=120, default=None)
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)

    school_name = models.CharField(max_length=120, null=True)
    debt_amount = models.DecimalField(decimal_places=2, max_digits=1000)
    debt_status = models.CharField(max_length=10, choices=DEBT_STATUS_CHOICES, default='PENDING')
    debt_type = models.CharField(max_length=120)
    debt_creation_date = models.DateField(auto_now_add=True)
    debt_payment_date = models.DateTimeField(blank=True, null=True)


class GlobalStudent(models.Model):
    student_government_id = models.CharField(max_length=120, blank=True, null=True)
    first_name = models.CharField(max_length=120, blank=True, null=True)
    last_name = models.CharField(max_length=120, blank=True, null=True)

    def __str__(self):
        return self.first_name + ' ' + self.last_name
    
    
class Dispute(models.Model):
    debtor_id = models.IntegerField()
    dispute_description = models.TextField()
    date_created = models.DateField(auto_now_add=True)
    

class Comment(models.Model):
    dispute_id = models.IntegerField()  
    dispute_comment = models.TextField()
    