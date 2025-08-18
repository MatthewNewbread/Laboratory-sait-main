from core.settings import settings

TORTOISE_ORM_CONFIG = {
    "connections": {
        "default": settings.db.url,
    },
    "apps": {
        "models": {
            "models": [
                "aerich.models",
                "leads.models",
            ],
        }
    },
    "default_connection": "default"
}
