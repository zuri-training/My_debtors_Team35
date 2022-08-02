from django.db import models

# Create your models here.


class School(models.Model):
    name = models.CharField(max_length=120)
    lga = models.CharField(max_length=120)
    state = models.CharField(max_length=120)
    contact = models.CharField(max_length=120) 
    address = models.CharField(max_length=120) 
    government_id = models.CharField(max_length=120) 
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=120)
    date_created = models.DateField(auto_now_add=True)


class Student(models.Model):
    name = models.CharField(max_length=120)
    student_government_id = models.CharField(max_length=120) 
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    date_of_birth = models.DateField()
    email = models.EmailField(max_length=254)
    state = models.CharField(max_length=120)
    lga = models.CharField(max_length=120)
    contact = models.CharField(max_length=120) 
    address = models.CharField(max_length=120) 
    password = models.CharField(max_length=120)
    date_created = models.DateField(auto_now_add=True)


class GlobalStudent(models.Model):
    name = models.CharField(max_length=120)
    student_government_id = models.CharField(max_length=120) 
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    
    
class DebtorsPosting(models.Model):
    school_id = models.IntegerField()
    global_student_id = models.CharField(max_length=120)
    debt_amount = models.DecimalField(decimal_places=2, max_digits=10000)
    debt_status = models.CharField(max_length=120)
    debt_type = models.CharField(max_length=120)
    debt_creation_date = models.DateField(auto_now_add=True)
    debt_payment_date = models.DateTimeField()
    
    
class Dispute(models.Model):
    debtor_id = models.IntegerField()
    dispute_description = models.TextField()
    date_created = models.DateField(auto_now_add=True)
    

class Comment(models.Model):
    dispute_id = models.IntegerField()  
    dispute_comment = models.TextField()
    