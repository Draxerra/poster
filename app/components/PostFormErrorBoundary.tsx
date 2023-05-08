'use client'

import React from 'react';

type PostFormErrorBoundaryProps = {
  children: (error: Error | null, reset: () => void) => React.ReactNode;
}

type PostFormErrorBoundaryState = {
  error: Error | null;
}

export default class PostFormErrorBoundary extends React.Component<PostFormErrorBoundaryProps, PostFormErrorBoundaryState> {
  public constructor(props: PostFormErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  public reset() {
    this.setState({ error: null });
  }

  public render() {
    return this.props.children(this.state.error, this.reset.bind(this));
  }
}
