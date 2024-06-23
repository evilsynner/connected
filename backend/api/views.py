from django.shortcuts import render

from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserRegistrationSerializer
from .serializers import MyTokenObtainPairSerializer
from .serializers import UserSerializer
from .serializers import PasteSerializer
from .models import Paste
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import get_user_model

# Create your views here.
class UserRegistrationAPIView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_user_info(request, username):
    User = get_user_model()
    user = User.objects.get(username=username)
    serializer = UserSerializer(user)
    return Response(serializer.data)

class PasteCreateView(generics.CreateAPIView):
    queryset = Paste.objects.all()
    serializer_class = PasteSerializer
    permission_classes = [IsAuthenticated]

class PasteListView(generics.ListAPIView):
    queryset = Paste.objects.all()
    serializer_class = PasteSerializer
    permission_classes = [IsAuthenticated]
