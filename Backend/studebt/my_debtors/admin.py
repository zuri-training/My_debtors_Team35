from django.contrib import admin

from .models import DebtorsPosting, Dispute, Comment, GlobalStudent
# Register your models here.


admin.site.register(DebtorsPosting)
admin.site.register(Dispute)
admin.site.register(Comment)
admin.site.register(GlobalStudent)
