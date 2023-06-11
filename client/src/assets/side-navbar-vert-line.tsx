const SideNavbarVertLine = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <svg
        width="6"
        height="100%"
        viewBox="0 0 6 100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333ZM3 575.333C1.52724 575.333 0.333333 576.527 0.333333 578C0.333333 579.473 1.52724 580.667 3 580.667C4.47276 580.667 5.66667 579.473 5.66667 578C5.66667 576.527 4.47276 575.333 3 575.333ZM2.5 3L2.5 578H3.5L3.5 3H2.5Z"
          fill="#808080"
        />
      </svg>
    </div>
  );
};

export default SideNavbarVertLine;
