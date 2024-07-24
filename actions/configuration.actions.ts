"use server"
import { db } from "@/db"
import { SaveConfigArgs } from "@/interfaces/DesignConfigurator"


export const getConfigurations = async (id: string) => {
  return await db.configuration.findUnique({
    where: { id },
  })
}

export const saveConfig = async ({
  color,
  finish,
  material,
  model,
  configId,
}: SaveConfigArgs) => {
  return await db.configuration.update({
    where: { id: configId },
    data: { color, finish, material, model },
  })
}
