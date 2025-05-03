from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView

class TestAPI(APIView):
    def get(self, request):
        return Response({"message": "Hello from Django API!"})

@api_view(['GET'])
def signup(request):
    return Response({'message': 'SIGN UP | This is a message from the backend! Change your elements to see the changes!'})
