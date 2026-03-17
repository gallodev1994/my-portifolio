import Link from "next/link";
import "./footer.scss";

interface FooterProps {
  instagramLabel: string;
  linkedinLabel: string;
  githubLabel: string;
  twitterLabel: string;
  emailLabel: string;
}

export function Footer({
  instagramLabel,
  linkedinLabel,
  githubLabel,
  twitterLabel,
  emailLabel,
}: FooterProps) {
  return (
    <footer className="footer">
      <div className="social-links">
        <Link
          href="https://www.instagram.com/galloskt/"
          target="_blank"
          aria-label={instagramLabel}
          className="social-link"
        >
          <i className="fab fa-instagram"></i>
        </Link>
        <Link
          href="https://www.linkedin.com/in/christian-gallo-b4291bb0/"
          target="_blank"
          aria-label={linkedinLabel}
          className="social-link"
        >
          <i className="fab fa-linkedin-in"></i>
        </Link>
        <Link
          href="https://github.com/gallodev/"
          target="_blank"
          aria-label={githubLabel}
          className="social-link"
        >
          <i className="fab fa-github"></i>
        </Link>
        <Link
          href="https://www.twitter.com/gallodev1994/"
          target="_blank"
          aria-label={twitterLabel}
          className="social-link"
        >
          <i className="fab fa-twitter"></i>
        </Link>
        <Link
          href="mailto:contato.gallodev@gmail.com"
          aria-label={emailLabel}
          className="social-link"
        >
          <i className="fas fa-envelope"></i>
        </Link>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Christian Gallo</p>
    </footer>
  );
}
