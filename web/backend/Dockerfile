FROM python:3.11-alpine

WORKDIR /web/backend

COPY requirements.txt  .

RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev \
    && apk add jpeg-dev zlib-dev libjpeg postgresql-dev \
    && pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt \
    && pip install --no-cache-dir Twisted["tls, http2"] \
    && apk del build-deps

COPY . .

RUN    echo SECRET_KEY=$(python3 -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())") > .env \
    && echo DJANGO_SUPERUSER_PASSWORD="admin" >> .env

RUN mkdir logs

EXPOSE 8080

ENTRYPOINT [ "./entrypoint.sh" ]