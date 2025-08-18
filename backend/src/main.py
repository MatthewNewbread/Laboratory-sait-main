from fastapi import FastAPI

from core.routers import register_routers
from db.register import register_orm

app = FastAPI()

register_orm(app)
register_routers(app)
