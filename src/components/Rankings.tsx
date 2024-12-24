/**
 * @author Andrew Kim
 * @version 0.0.1
 * @since 17 December 2024
 * 
 * Rankings
 */


const placings2023 = [
    {
        2: ["Forestry"],
        3: ["Astronomy"],
        5: ["Fermi Questions", "Forensics"],
        6: ["It's About Time", "WiFi Lab"],
    },
    {
        0: ["4th overall"],
        1: ["Bridge, Flight", "Remote Sensing"],
        2: ["Experiemntal Design", "Flight", "Forensics", "Forestry"],
        3: ["Forensics"],
        4: ["WIDI"],
        5: ["Anatomy & Physiology"],
    },
    {
        2: ["It's About Time"],
        4: ["WiFi Lab"],
        5: ["Forestry"],
    },
    {
        0: ["3rd overall"],
        1: ["Forensics"],
        2: ["Detector Building", "Forestry", "It's About Time", "Scrambler", "Trajectory", "WiFi Lab"],
        3: ["Environmental Chemistry", "Experimental Design", "Rocks and Minerals"],
        4: ["Bridge", "Dynamic Planet", "Fermi Questions"],
        5: ["Disease Detectives", "WIDI"],
        6: ["Anatomy & Physiology", "Chem Lab", " Dynamic Planet"],
    },
    {
        0: ["4th overall"],
        1: ["Forestry"],
        2: ["Detector Building", "Fermi Questions", "Green Generation"],
        3: ["Forensics", "It's About Time", "Botany"],
        4: ["Flight", "Solar Power"],
        5: ["Codebusters", "Disease Detectives", "Environmental Chemistry"],
        6: ["Remote Sensing", "WIDI"],
    }
]

const placings2024 = [
    {
        0: ["4th overall"],
        3: ["Anatomy & Physiology", "Science in the News"],
        5: ["Science in the News"],
        7: ["Disease Detectives"],
        8: ["Disease Detectives"]
    },
    {
        0: ["2nd overall"],
        1: ["Air Trajectory", "Disease Detectives"],
        2: ["Astronomy", "Codebusters", "WIDI"],
        3: ["Anatomy & Physiology", "Astronomy", "Detector Building", "Forestry", "Tower"],
        4: ["Fossils"],
        6: ["Air Trajectory", "Dynamic Planet"]
    },
    {
        0: ["8th overall"],
        1: ["Disease Detectives"],
        4: ["Codebusters", "Robot Tour", "Tower"],
        5: ["Air Trajectory"],
        6: ["Anatomy & Physiology", "Disease Detectives"]
    },
    {
        0: ["1st overall"],
        1: ["Astronomy", "Disease Detectives", "Robot Tour", "Wind Power"],
        2: ["Air Trajectory", "Codebusters", "Dynamic Planet", "Ecology", "Geologic Mapping"],
        3: ["Air Trajectory", "Anatomy & Physiology", "Forensics", "Forestry", "Fossils"],
        4: ["Codebusters", "Disease Detectives", "Dynamic Planet", "Fermi Questions", "Forestry", "Robot Tour", "Scrambler", "Tower", "Wind Power"],
        5: ["Anatomy & Physiology", "Astronomy", "Ecology", "Optics", "Robot Tour", "Tower"],
        6: ["Air Trajectory", "Fermi Questions", "Geologic Mapping"]
    },
    {
        0: ["4th overall"],
        1: ["Codebusters", "Fermi Questions", "Robot Tour"],
        2: ["Disease Detectives", "Experimental Design", "Geologic Mapping", "Agricultural Science"],
        3: ["Forensics", "Cybersecurity"],
        4: ["Air Trajectory", "Anatomy & Physiology", "Forestry", "Microbe Mission", "Wind Power"],
        6: ["Dynamic Planet"]
    }
]

const placings2025: any = [
    {
        0: ["2nd overall"],
        2: ["Codebusters", "Etomology"],
        3: ["Fossils", "Optics"],
        5: ["Wind Power"],
        8: ["Ecology"],
        9: ["Anatomy & Physiology"]
    },
    {
        0: ["4th overall"],
        1: ["Helicopter"],
        2: ["Codebusters", "Tower"],
        4: ["Forensics", "Fossils", "Robot Tour"],
        5: ["Entomology", "Microbe Mission", "Tower"],
        6: ["Air Trajectory", "Brainrot Battle"]
    },
    {
        0: ["1st overall"],
        1: ["Anatomy & Physiology", "Air Trajectory", "Astronomy", "Bungee Drop", "Codebusters", "Disease Detectives", "Electric Vehicle", "Entomology", "Forensics", "Helicopter", "Robot Tour", "Wind Power"],
        2: ["Dynamic Planet", "Towers"],
        3: ["Anatomy & Physiology", "Geologic Mapping", "Materials Science"],
        4: ["Forensics", "Fossils", "Robot Tour", "Towers"],
        5: ["Bungee Drop", "Chem Lab", "Codebusters", "Dynamic Planet", "Experimental Design", "Geologic Mapping", "Microbe Mission", "Optics"]
    }
]

const years = [placings2023, placings2024, placings2025];
const abbreviations = ["NaN", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"]


interface RankingProps {
    year: number;
    compIndex: number;
}


/**
 * Obtains rankings for desired season and competition
 * @param year desired season
 * @param compIndex index of competition attended
 * @returns dictionary of rankings
 */
const Rankings: React.FC<RankingProps> = ({ year, compIndex }) => {
    const yearDict = years[year - 2023];
    const placements = [];
    let summary = null;
    if (yearDict && yearDict[compIndex]) {
        const competitionDict = yearDict[compIndex];
        for (const rankRaw in competitionDict) {
            const rankNum = Number(rankRaw);
            if (rankNum !== 0 && competitionDict[rankRaw]) {
                const ranks = competitionDict[rankRaw];
                for (const eventRaw in ranks) {
                    const event = ranks[Number(eventRaw)]
                    if (event && rankNum !== 0) {
                        placements.push(
                            <div className="rank col-xs-12 col-sm-12 col-md-4 col-lg-4" key={`${rankRaw}-${eventRaw}-${event}`}>
                                <div className={"rank-icon rank-" + abbreviations[rankNum]}>{rankRaw}</div>
                                <span className="rank-events">{event}</span>
                            </div>
                        )
                    }
                }
            } else {
                summary = competitionDict[0];
            }
        }
    }
    return <div className="placing-container">
        <div className="placing-list">
            {(summary) ?
                (
                    <div className="overall">{summary + ", " + placements.length + " medals"}</div>
                ) : (
                    <div className="overall">{placements.length + " medals"}</div>
                )
            }
            <div className="placements row">
                {placements}
            </div>
        </div>
    </div>
}


export default Rankings;