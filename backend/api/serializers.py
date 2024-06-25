from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Paste

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username", "email", "password"]

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data.get("username"),
            email=validated_data.get("email")
        )
        user.set_password(validated_data.get("password"))
        user.save()
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email", "password"]

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user=user)

        return token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "username", "email"]

class PasteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paste
        fields = [
            "title", "content",
            "publish_date", "last_updated",
            "author", "slug", "uuid"
        ]
        read_only_fields = [
            "publish_date", "last_updated",
            "author", "slug", "uuid"
        ]

    def create(self, validated_data):
        request = self.context.get("request")
        user = request.user
        paste = Paste.objects.create(author=user, **validated_data)
        return paste
