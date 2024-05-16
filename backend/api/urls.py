from django.urls import path
from .views import (
    UserRegistrationAPIView,
    MyTokenObtainPairView
)

urlpatterns = [
    path("token/", MyTokenObtainPairView.as_view()),
    path("register/", UserRegistrationAPIView.as_view()),
]