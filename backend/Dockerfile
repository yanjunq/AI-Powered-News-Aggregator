FROM python:3.9

WORKDIR /app

# Copy only the requirements file initially to leverage Docker cache
COPY requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . .

# Set the environment variable for Django settings module
ENV DJANGO_SETTINGS_MODULE=backend.settings

# Run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
