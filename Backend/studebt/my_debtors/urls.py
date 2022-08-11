from django.urls import path

app_name='my_debtors'

from .views import ( DebtorsPostingCreateView, DebtorsPostingDetailView, DebtorsPostingListView,
CommentCreateAPI, CommentListAPI, DisputeCreateAPI, DisputeListAPI)

urlpatterns = [
    path('add-debtor/', DebtorsPostingCreateView.as_view(), name='add-debtor'),
    path('view-all-debtors/', DebtorsPostingListView.as_view(), name='view-all-debtors'),
    path('view-debtors/<int:pk>/', DebtorsPostingDetailView.as_view(), name='view-debtors'),

    path('create-comment/', CommentCreateAPI.as_view(), name='create-comment'),
    path('view-comments/<int:dispute_id>/', CommentListAPI.as_view(), name='view-comments'),
    path('create-dispute/', DisputeCreateAPI.as_view(), name='create-dispute'),
    path('view-disputes/', DisputeListAPI.as_view(), name='view-disputes'),
]