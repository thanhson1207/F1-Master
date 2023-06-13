import styles from "./ContentDriverPage.module.css";

function ContentDriverPage({ data }) {
  console.log(data);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.boxImg}>
          <img
            className={styles.img}
            width="100%"
            height="100%"
            src={data.data.Image}
          />
        </div>
        <div className={styles.boxName}>
          {data.data.Name && (
            <div className={styles.Ex}>
              <div className={styles.bl}>Name:</div>
              <div className={styles.name}>{data.data.Name}</div>
            </div>
          )}

          {data.data.Base && (
            <div className={styles.Ex}>
              <div className={styles.bl}>Base:</div>
              <div className={styles.name}>{data.data.Base}</div>
            </div>
          )}

          {data.data.TeamChief && (
            <div className={styles.Ex}>
              <div className={styles.bl}>TeamChief:</div>
              <div className={styles.name}>{data.data.TeamChief}</div>
            </div>
          )}

          {data.data.TechnicalChief && (
            <div className={styles.Ex}>
              <div className={styles.bl}>TechnicalChief:</div>
              <div className={styles.name}>{data.data.TechnicalChief}</div>
            </div>
          )}

          {data.data.Chassis && (
            <div className={styles.Ex}>
              <div className={styles.bl}>Chassis:</div>
              <div className={styles.name}>{data.data.Chassis}</div>
            </div>
          )}

          {data.data.PowerUnit && (
            <div className={styles.Ex}>
              <div className={styles.bl}>Power Unit:</div>
              <div className={styles.name}>{data.data.PowerUnit}</div>
            </div>
          )}

          {data.data.FirstTeamEntry && (
            <div className={styles.Ex}>
              <div className={styles.bl}>First Team Entry:</div>
              <div className={styles.name}>{data.data.FirstTeamEntry}</div>
            </div>
          )}

          {data.data.Team && (
            <div className={styles.Ex}>
              <div className={styles.bl}>Team:</div>
              <div className={styles.name}>{data.data.Team}</div>
            </div>
          )}

          {data.data.Country && (
            <div className={styles.Ex}>
              <div className={styles.bl}>Country:</div>
              <div className={styles.name}>{data.data.Country}</div>
            </div>
          )}

          {data.data.Podiums && (
            <div className={styles.Ex}>
              <div className={styles.bl}>Podiums:</div>
              <div className={styles.name}>{data.data.Podiums}</div>
            </div>
          )}

          {data.data.Points && (
            <div className={styles.Ex}>
              <div className={styles.bl}>Points:</div>
              <div className={styles.name}>{data.data.Points}</div>
            </div>
          )}

          {data.data.GrandsPrixEntered && (
            <div className={styles.Ex}>
              <div className={styles.bl}>Grands Prix Entered:</div>
              <div className={styles.name}>{data.data.GrandsPrixEntered}</div>
            </div>
          )}

          {data.data.WorldChampionships && (
            <div className={styles.Ex}>
              <div className={styles.bl}>World Championships:</div>
              <div className={styles.name}>{data.data.WorldChampionships}</div>
            </div>
          )}

          {data.data.HighestRaceFinish && (
            <div className={styles.Ex}>
              <div className={styles.bl}>Highest Race Finish:</div>
              <div className={styles.name}>{data.data.HighestRaceFinish}</div>
            </div>
          )}

          {data.data.PolePositions && (
            <div className={styles.Ex}>
              <div className={styles.bl}>Pole Positions:</div>
              <div className={styles.name}>{data.data.PolePositions}</div>
            </div>
          )}

          {data.data.FastestLaps && (
            <div className={styles.Ex}>
              <div className={styles.bl}>Fastest Laps:</div>
              <div className={styles.name}>{data.data.FastestLaps}</div>
            </div>
          )}

          {data.data.HighestGridPosition && (
            <div className={styles.Ex}>
              <div className={styles.bl}>Highest Grid Position:</div>
              <div className={styles.name}>{data.data.HighestGridPosition}</div>
            </div>
          )}

          {data.data.DateOfBirth && (
            <div className={styles.Ex}>
              <div className={styles.bl}>Date Of Birth:</div>
              <div className={styles.name}>{data.data.DateOfBirth}</div>
            </div>
          )}

          {data.data.PlaceOfBirth && (
            <div className={styles.Ex}>
              <div className={styles.bl}>Place Of Birth:</div>
              <div className={styles.name}>{data.data.PlaceOfBirth}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContentDriverPage;
