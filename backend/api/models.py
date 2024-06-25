from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.text import slugify
from uuid import uuid4

# Create your models here.
class User(AbstractUser):
    def __str__(self):
        return f"{self.id} - {self.username}"

class Paste(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    content = models.TextField(max_length=5000, blank=False, null=False)
    publish_date = models.DateTimeField(auto_now_add=True, blank=False, null=False)
    last_updated = models.DateTimeField(auto_now=True, blank=False, null=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    slug = models.SlugField(blank=False, null=False)
    uuid = models.UUIDField(default=uuid4, editable=False, blank=False, null=False)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save()
    def __str__(self):
        return f"{self.id} - {self.title}"
