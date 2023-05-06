FROM python:3.11-alpine

WORKDIR /web

COPY requirements.txt  ./

RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev \
    && apk add jpeg-dev zlib-dev libjpeg \
    && pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt \
    && apk del build-deps

COPY . ./backend

WORKDIR /web/backend

RUN    echo SECRET_KEY=$(python3 -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())") > .env \
    && echo DJANGO_SUPERUSER_PASSWORD="admin" >> .env

RUN \ 
       python3 manage.py makemigrations \
    && python3 manage.py migrate \
    && python3 manage.py createsuperuser --no-input --username admin --email admin@local.lan \
    && python3 manage.py collectstatic --no-input

RUN mkdir logs

EXPOSE 8080

CMD ["daphne", "-b0.0.0.0", "-p8080", "--access-log ./logs/access.log", "--proxy-headers", "main.asgi:application"]