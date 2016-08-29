from django.db import models

class Blog(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    content = models.TextField()
    owner = models.ForeignKey('auth.User', related_name='blog')

    def save(self, *args, **kwargs):
        options = self.title and {'title': self.title} or {}
        super(Blog, self).save(*args, **kwargs)

    class Meta:
        ordering = ('created',)
