from django.urls import path
from .views import (
    UserRegistrationAPIView,
    MyTokenObtainPairView,
    get_user_info
)
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("token/", MyTokenObtainPairView.as_view()),
    path("token/refresh/", TokenRefreshView.as_view()),
    path("register/", UserRegistrationAPIView.as_view()),
    path("user-info/<str:username>/", get_user_info),
]
