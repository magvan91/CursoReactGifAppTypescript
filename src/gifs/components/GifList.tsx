import type { Gif } from "../interfaces/gif.interface";

interface Props {
  gifs: Gif[];
}
export const GifList = ({ gifs }: Props) => {
  return (
    <div className="gifs-container">
      {gifs.map(({ id, url, title, height, width }) => (
        <div key={id} className="gif-card">
          <img src={url} alt={title} />
          <h3>{title}</h3>
          <p>
            {height}x{width}
          </p>
        </div>
      ))}
    </div>
  );
};
