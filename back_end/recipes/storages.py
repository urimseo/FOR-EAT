class FileUpload:
    def __init__(self, client):
        self.client = client

    def upload(self, file):
        return self.client.upload(file)


from contextlib import nullcontext
import boto3
import uuid

from decouple import config

class MyS3Client:
    def __init__(self, access_key, secret_key, bucket_name):
        boto3_s3 = boto3.client(
            's3',
            aws_access_key_id     = access_key,
            aws_secret_access_key = secret_key
        )
        self.s3_client   = boto3_s3
        self.bucket_name = bucket_name

    def upload(self, file):
        try: 
            file_id    = str(uuid.uuid4())
            extra_args = { 'ContentType' : file.content_type }

            self.s3_client.upload_fileobj(
                    file,
                    self.bucket_name,
                    file_id,
                    ExtraArgs = extra_args
                )
            return f'https://{self.bucket_name}.s3.ap-northeast-2.amazonaws.com/{file_id}'
        except:
            return None

    def delete(self, image_url):
        try:
            self.s3_client.delete_fileobj(
                Bucket=self.bucket_name,
                Key=image_url
            )
            return None
        except:
            return None
    
# MyS3Client instance
s3_client = MyS3Client(config('AWS_ACCESS_KEY'), config('AWS_SECRET_KEY'), config('S3_BUCKET_NAME'))