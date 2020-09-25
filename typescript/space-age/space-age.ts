export enum OrbitalPeriod {
  Earth = 1,
  Mercury = 0.2408467,
  Venus = 0.61519726,
  Mars = 1.8808158,
  Jupiter = 11.862615,
  Saturn = 29.447498,
  Uranus = 84.016846,
  Neptune = 164.79132,
}

class SpaceAge {
  constructor(readonly seconds: number) {}

  private parseAge(orbitalPeriod: OrbitalPeriod): number {
    const baseFactor = 31557600;
    const ageParsed = this.seconds / baseFactor / orbitalPeriod;
    return this.roundDecimalPlaces(ageParsed);
  }

  private roundDecimalPlaces(number: number): number {
    return +number.toFixed(2);
  }

  onEarth(): number {
    return this.parseAge(OrbitalPeriod.Earth);
  }
  onMercury(): number {
    return this.parseAge(OrbitalPeriod.Mercury);
  }
  onVenus(): number {
    return this.parseAge(OrbitalPeriod.Venus);
  }
  onMars(): number {
    return this.parseAge(OrbitalPeriod.Mars);
  }
  onJupiter(): number {
    return this.parseAge(OrbitalPeriod.Jupiter);
  }
  onSaturn(): number {
    return this.parseAge(OrbitalPeriod.Saturn);
  }
  onUranus(): number {
    return this.parseAge(OrbitalPeriod.Uranus);
  }
  onNeptune(): number {
    return this.parseAge(OrbitalPeriod.Neptune);
  }
}
export default SpaceAge;
