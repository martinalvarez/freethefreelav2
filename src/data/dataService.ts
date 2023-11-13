import { Db } from "../types/Db";

export async function fetchDb() {
  await new Promise(resolve => setTimeout(resolve, 500));

  const response = await fetch('./data.json');
  const data: Db = await response.json();
  return data;    
}