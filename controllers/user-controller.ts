import db from '../models';
import { Request, Response } from 'express';

const User = db.users;

class UserController {
    /*
        C REATE USERS
        R EAD ONE OR ALL THE USERS OF THE DB

        U PDATE AN USER RECORD
        D ELETE AN USER BY ITS ID
    */

    /**
     *  Create a new user in the database.
     * 
     * @param {import('express').Request} req -The HTTP Request.
     * @param {import('express').Response} res - The HTTP Response.
     * @returns {Promise<void>}
    */
    async createUser(req:Request, res:Response) {
        try {
            // Create a User
            const user = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            };
            // Save User in the database
            const data = await User.create(user);
            res.status(201).send(data);
        }
        catch (error: any) {
            res.status(500).send({
                message: error.message || "Some error occurred while creating the User."
            });
        }
    }

    /**
     * Fetches all the users from the users table and returns them as a JSON object.
     *
     * @param {import('express').Request} req - The HTTP Request. 
     * @param {import('express').Response} res - The HTTP Response.
     * @returns {Promise<void>}
     */

    async readUsers(req:Request, res:Response) {
        try {
            const data = await User.findAll();
            res.status(200).send(data);
        }
        catch (error:any) {
            res.status(500).send({
                message: error.message || "Some error occurred while retrieving users."
            });
        }
    }


    /**
     * Update an user info by the id in the request body.
     *
     * @param {import('express').Request} req - The HTTP Request. 
     * @param {import('express').Response} res - The HTTP Response.
     * @returns {Promise<void>}
     */

    async updateUser(req:Request, res:Response) {
        const uid = req.params.id;
        try {
            const data = await User.update(req.body, {
                where: { id: uid }
            });
            if (data == 1) {
                res.status(204).send({
                    message: "User was updated successfully."
                });
            } else {
                res.status(404).send({
                    message: `Cannot update User with id=${uid}. Maybe User was not found or req.body is empty!`
                });
            }
        }
        catch (error:any) {
            res.status(500).send({
                message: error.message || `Error updating User with id=${uid}`
            });
        } 
    }

    /**
     * Deletes an user from the database by the id of the user.
     *
     * @param {import('express').Request} req - The HTTP Request. 
     * @param {import('express').Response} res - The HTTP Response.
     * @returns {Promise<void>}
     */

    async deleteUser(req:Request, res:Response) {
        const uid = req.params.id;
        try {
            const data = await User.destroy({
                where: { id: uid }
            });
            if (data == 1) {
                res.status(204).send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.status(404).send({
                    message: `Cannot delete User with id=${uid}. Maybe User was not found!`
                });
            }
        }
        catch (error:any) {
            res.status(500).send({
                message: error.message || `Could not delete User with id=${uid}`
            });
        }

    }
}

export default new UserController();