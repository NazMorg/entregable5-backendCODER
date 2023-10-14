import { Router } from "express";
import { cartsManager } from "../managers/cartsManager.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const carts = await cartsManager.findAll();
        if (!carts) {
            res.status(400).json({ message: "No se encontraron carritos" });
        }
        return res.status(200).json({ message: "Carritos Encontrados", carts: carts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.get("/:cid", async (req, res) => {
    try {
        const cartId = req.params.cid;
        const cartById = await cartsManager.findById(cartId);
        if (!cartById) {
            res.status(400).json({ message: "No se encontro el carrito" });
        }
        return res.status(200).json({ message: "Carrito Encontrado", cart: cartById });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.post("/", async (req, res) => {
    try {
        const createdCart = await cartsManager.createOne(req.body);
        if (!createdCart) {
            res.status(400).json({ message: "No se pudo crear el carrito" });
        }
        res.status(200).json({ message: "Carrito Creado", cart: createdCart });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.put("/:cid", async (req, res) => {
    try {
        const cartId = req.params.cid;
        const cartData = req.body;

        const updatedCart = await cartsManager.updateOne(cartId, cartData);
        if (!updatedCart) {
            res.status(400).json({ message: "No se encontro el carrito" });
        }
        res.status(200).json({ message: "Producto Actualizado", cart: updatedCart });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.delete("/:cid", async (req, res) => {
    try {
        const cartId = req.params.cid;
        const deletedCart = await cartsManager.deleteOne(cartId);

        if (!deletedCart) {
            res.status(400).json({ message: "No se encontro el carrito" });
        }
        res.status(200).json({ message: "Producto Eliminado", cart: deletedCart });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

export default router;