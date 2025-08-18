from fastapi import APIRouter, FastAPI

from leads.api import router as leads_router

ROUTERS = [
    leads_router,
]


def register_routers(app: FastAPI, prefix: str = "/api") -> None:
    for router in ROUTERS:
        api_router = APIRouter(prefix=prefix)

    for router in ROUTERS:
        api_router.include_router(router)

    app.include_router(api_router)
