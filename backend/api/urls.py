from django.urls import path
from .views import TestAPI, signup

urlpatterns = [
    path('test/', TestAPI.as_view(), name='test-api'),  # This will map to '/api/test/'
    path('signup/', signup, name='signup'),  # This will map to '/api/signup/'
]