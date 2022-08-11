from django.db import models
from django.contrib.auth import get_user_model
from django.urls import reverse

from accounts.models import Student, School


User = get_user_model()

# Create your models here.


    
    
class DebtorsPosting(models.Model):
    DEBT_STATUS_CHOICES = (
        ('PENDING', 'Pending'),
        ('CLEARED', 'Cleared'),
        ('DENIED', 'Denied'),
    )


    student_government_id = models.CharField(max_length=120, default=None)
    government_id = models.CharField(max_length=120, default=None)
    student_full_name = models.CharField(max_length=120, default=None)

    school_name = models.CharField(max_length=120, null=True)
    debt_amount = models.DecimalField(decimal_places=2, max_digits=1000)
    debt_status = models.CharField(max_length=10, choices=DEBT_STATUS_CHOICES, default='PENDING')
    debt_type = models.CharField(max_length=120)
    debt_creation_date = models.DateField(auto_now_add=True)
    debt_payment_date = models.DateTimeField(blank=True, null=True)

    date_updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-debt_creation_date']
        verbose_name = 'Debtor'
        verbose_name_plural = 'Debtors'


    def __str__(self):
        return f'{self.student_full_name} - {self.school_name}'


class GlobalStudent(models.Model):
    student_government_id = models.CharField(max_length=120, blank=True, null=True)
    first_name = models.CharField(max_length=120, blank=True, null=True)
    last_name = models.CharField(max_length=120, blank=True, null=True)

    def __str__(self):
        return self.first_name + ' ' + self.last_name
    
    
class Dispute(models.Model):
    debtor_author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='debtor_author')
    dispute_content = models.TextField()
    date_created = models.DateField(auto_now_add=True)
    

class Comment(models.Model):
    comment_author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comment_author')
    dispute = models.ForeignKey(Dispute, on_delete=models.CASCADE, related_name='dispute')
    comment_content = models.TextField() 
    date_created = models.DateField(auto_now_add=True)
    