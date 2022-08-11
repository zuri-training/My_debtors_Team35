from django.urls import path

app_name='my_debtors'

from .views import ( DebtorsPostingCreateView, DebtorsPostingDetailView)

urlpatterns = [
    path('add-debtor/', DebtorsPostingCreateView.as_view(), name='add-debtor'),
    path('view-debtors/<int:pk>/', DebtorsPostingDetailView.as_view(), name='view-debtors'),
]