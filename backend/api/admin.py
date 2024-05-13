from django.contrib import admin

from .models import (
    User, Profile
)

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ["username", "email"]

class ProfileAdmin(admin.ModelAdmin):
    list_display = ["user", "first_name", "last_name",
        "biography", "photo"]
    list_editable = ["first_name", "last_name",
        "biography", "photo"]

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)