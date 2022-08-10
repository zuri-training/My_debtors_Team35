from django.contrib import admin
from my_debtors.models import Comment, Dispute

# Register your models here.

admin.site.register(Comment)
admin.site.register(Dispute)