from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save

# Create your models here.
class User(AbstractUser):
    username = models.CharField(verbose_name="username",
        primary_key=False, max_length=64, unique=True,
        blank=False, null=False, editable=True)
    email = models.EmailField(verbose_name="email",
        primary_key=False, max_length=64, unique=True,
        blank=False, null=False, editable=True)
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        "username"
    ]

    def __str__(self):
        return f"{self.username} - {self.email}"

class Profile(models.Model):
    user = models.OneToOneField(to=User, on_delete=models.CASCADE)

    first_name = models.CharField(verbose_name="first name",
        primary_key=False, max_length=64, unique=False,
        blank=False, null=False, editable=True)
    last_name = models.CharField(verbose_name="last name",
        primary_key=False, max_length=64, unique=False,
        blank=False, null=False, editable=True)
    biography = models.CharField(verbose_name="biography",
        primary_key=False, max_length=512, unique=False,
        blank=True, null=True, editable=True)
    photo = models.ImageField(verbose_name="profile photo",
        default="default_profile_photo.jpg",
        upload_to="profiles_photos")

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.user.username}"

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)