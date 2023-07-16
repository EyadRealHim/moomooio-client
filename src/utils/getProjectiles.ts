import projectiles from "../data/projectiles";

type ReturnProjectile = (typeof projectiles)[number] | undefined;

export default function getProjectile(projectileSrc: string): ReturnProjectile;
export default function getProjectile(projectileType: number): ReturnProjectile;
export default function getProjectile(projectileTypeOrSrc: number | string): ReturnProjectile {
  if (typeof projectileTypeOrSrc == "string")
    return projectiles.find((projectile) => projectile.src == projectileTypeOrSrc);
  else {
    return projectiles[projectileTypeOrSrc];
  }
}
